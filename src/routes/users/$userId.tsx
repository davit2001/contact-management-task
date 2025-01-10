import { createFileRoute } from '@tanstack/react-router'
import useQueryUser from '@/hooks/useQueryUser.ts';
import Image from '@/ui/atoms/Image.tsx';
import UserForm from '@/components/UserForm.tsx';
import DeleteUserDialog from '@/components/DeleteUserDialog.tsx';
import fallbackImageUrl from '@/assets/fallback-image.png';
import Loader from '@/assets/spinner.svg';

export const Route = createFileRoute('/users/$userId')({
  component: RouteComponent,
  pendingComponent: () => <Loader />
})

function RouteComponent() {
  const { userId } = Route.useParams();
  const { data, isLoading } = useQueryUser(userId);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="flex gap-4">
        {
          !data && !isLoading && <p className="text-center text-red">User not found</p>
        }
        {
          !isLoading && !!data && (
            <>
              <Image
                src={data?.profilePicture}
                width="150"
                height="150"
                className="object-cover rounded-2xl w-full h-full max-w-[150px] max-h-[150px]"
                placeholderUrl={fallbackImageUrl}
                alt={`${data.name} image`}
              />
              <div>
                <h1 className="text-2xl font-bold text-black">{data.name}</h1>
                <p className="text-blue">{data.username}</p>
                <p className="text-gray-500">{data.bio}</p>
                <div className="pt-1 flex gap-1">
                  <UserForm source="update" title="Edit user data" buttonName="Edit" userData={data} />
                  <DeleteUserDialog />
                </div>
              </div>
            </>
          )
        }
        {
          isLoading && (
            <Loader />
          )
        }
      </div>
    </div>
  )
}

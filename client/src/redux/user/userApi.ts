import { apiSlice } from "../api/apiSlice";
import { toast } from "react-hot-toast";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "get-users",
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: ["users"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // toast.success("Profile Picture updated successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "update-user-avatar",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
      invalidatesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success("Profile Picture updated successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: "update-user-info",
        method: "PUT",
        body: {
          name,
        },
        credentials: "include" as const,
      }),
      invalidatesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success("Profile updated successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "update-user-password",
        method: "PUT",
        body: {
          oldPassword,
          newPassword,
        },
        credentials: "include" as const,
      }),
      invalidatesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success("Password changed successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),

    updateUserRole: builder.mutation({
      query: ({ email, role }) => ({
        url: "update-user",
        method: "PUT",
        body: { email, role },
        credentials: "include" as const,
      }),
      invalidatesTags: ["users"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success("User role updated successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
      invalidatesTags: ["users"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success("User deleted successfully!");
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdatePasswordMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = userApi;

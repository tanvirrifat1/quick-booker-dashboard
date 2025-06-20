import baseApi from "../api/baseAPI";

const authAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, any>({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/user/get-all-users?page=${page}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      }),
    }),

    getUserProfile: builder.query<any, string>({
      query: () => ({
        url: `/user/profile`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserProfileQuery } = authAPI;

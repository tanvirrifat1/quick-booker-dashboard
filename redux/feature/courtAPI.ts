import baseApi from "../api/baseAPI";

const courtAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourt: builder.query<any, any>({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/court/get-court-by-admin?page=${page}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      }),
      providesTags: ["Court"],
    }),
    deleteCourt: builder.mutation<any, string>({
      query: (courtId) => ({
        url: `/court/delete-court/${courtId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Court"],
    }),

    addCourt: builder.mutation<any, any>({
      query: (data) => ({
        url: `/court/create-court`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Court"],
    }),
  }),
});

export const {
  useGetAllCourtQuery,
  useDeleteCourtMutation,
  useAddCourtMutation,
} = courtAPI;

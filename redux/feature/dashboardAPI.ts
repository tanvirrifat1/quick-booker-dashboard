import baseApi from "../api/baseAPI";

const dashboardAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query<any, void>({
      query: () => ({
        url: "/dashboard/get-statistics",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatisticsQuery } = dashboardAPI;

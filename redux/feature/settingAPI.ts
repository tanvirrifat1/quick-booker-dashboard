import { set } from "date-fns";
import baseApi from "../api/baseAPI";

const settingAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateProfile: builder.mutation({
    //   query: (data) => ({
    //     url: `/user/update-profile`,
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //     body: data,
    //   }),
    //   invalidatesTags: ["Settings"],
    // }),

    // getProfile: builder.query({
    //   query: () => ({
    //     url: `/user/profile`,
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //     method: "GET",
    //   }),
    //   providesTags: ["Settings"],
    // }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: `auth/change-password`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Settings"],
    }),

    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `/setting/get/privacy`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
        providesTags: ["Settings"],
      }),
    }),

    setPrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: `/setting/update/privacy`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
        invalidatesTags: ["Settings"],
      }),
    }),

    getAboutUs: builder.query({
      query: () => ({
        url: `/setting/get/about`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
        providesTags: ["Settings"],
      }),
    }),

    updateAboutUs: builder.mutation({
      query: (data) => ({
        url: `/setting/update/about`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
        invalidatesTags: ["Settings"],
      }),
    }),

    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Settings"],
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-email`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Settings"],
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const {
  useUpdatePasswordMutation,
  useGetPrivacyPolicyQuery,
  useSetPrivacyPolicyMutation,
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
  useForgetPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
} = settingAPI;

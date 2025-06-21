import { set } from "date-fns";
import baseApi from "../api/baseAPI";

const settingAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/api-auth/update_profile/`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    getProfile: builder.query({
      query: () => ({
        url: `/user/profile`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
        providesTags: ["Profile"],
      }),
    }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: `auth/change-password`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
    }),

    setTermsAndConditions: builder.mutation({
      query: (data) => ({
        url: `/dicipline/terms-conditions/`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),

    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `/setting/get/privacy`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
        providesTags: ["Privacy"],
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
        invalidatesTags: ["Privacy"],
      }),
    }),

    getAboutUs: builder.query({
      query: () => ({
        url: `/setting/get/about`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
        providesTags: ["AboutUs"],
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
        invalidatesTags: ["AboutUs"],
      }),
    }),

    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-email`,
        method: "POST",
        body: data,
      }),
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
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useSetTermsAndConditionsMutation,
  useGetPrivacyPolicyQuery,
  useSetPrivacyPolicyMutation,
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
  useGetProfileQuery,
} = settingAPI;

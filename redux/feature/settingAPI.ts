import { set } from "date-fns";
import baseApi from "../api/baseAPI";

const settingAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/api-auth/update_profile/`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/api-auth/change_password/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
  }),
});

export const {
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useSetTermsAndConditionsMutation,
  useGetPrivacyPolicyQuery,
  useSetPrivacyPolicyMutation,
  useGetAboutUsQuery,
} = settingAPI;

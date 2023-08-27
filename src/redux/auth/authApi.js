// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://group-project-7.onrender.com/api-docs/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Auth'],
//     endpoints: builder => ({
//       updateUserInfo: builder.mutation({
//       query: data => ({
//         url: `user/update`,
//         method: 'PATCH',
//         body: data,
//       }),
//       invalidatesTags: ['Auth'],
//     }),
//   }),
// });

// export const {
//   useUpdateUserInfoMutation,
// } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Issues'],
    endpoints: (builder) => ({
        getIssues: builder.query({
            query: () => '/api/issues',
            providesTags: ['Issues'],
        }),
        addIssue: builder.mutation({
            query: (issue) => ({
                url: '/api/issues/add',
                method: 'POST',
                body: issue,
            }),
            invalidatesTags: ['Issues'],
        }),
        updateIssue: builder.mutation({
            query: (issue) => ({
                url: '/api/issues/update',
                method: 'PUT',
                body: issue,
            }),
            invalidatesTags: ['Issues'],
        }),
        deleteIssue: builder.mutation({
            query: (id ) => ({
                url: '/api/issues/delete',
                method: 'DELETE',
                body: { id },
            }),
            invalidatesTags: ['Issues'],
        }),
    })
});

export const { useGetIssuesQuery, useAddIssueMutation, useUpdateIssueMutation, useDeleteIssueMutation } = api;

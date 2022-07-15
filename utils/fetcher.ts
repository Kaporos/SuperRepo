//@ts-ignore
export const fetcher = (...args) => fetch(...args).then(r => r.json());
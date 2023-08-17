import { client } from '../../sanity/lib/client'

export const fetchData = async (type: string) => {
  const query = `*[_type == "${type}"]`
  const res = await client.fetch(query)
  if (res.length === 1) {
    return res[0]
  } else {
    return res
  }
}

export const fetchProductByGender = async (gender: string) => {
  const query = `*[_type == "product" && gender == "${gender}"]`
  const res = await client.fetch(query)
  return res
}

export const fetchProductBySlug = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"]`
  const res = await client.fetch(query)
  return res[0]
}

export const fetchProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == "${id}"]`
  const res = await client.fetch(query)
  return res[0]
}

export const makeQuery = (search: string) => {
  const query = `*[_type == "product" && label match "${search}" || category match   "${search}" || gender match "${search}"]`
  return query
}

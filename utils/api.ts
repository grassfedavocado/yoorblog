export const BASE_URL = process.env.NEXT_PUBLIC_API;

export async function get(url: string, data?: any) {
  url = `${url}`;

  if (data) {
    const params = new URLSearchParams();

    for (const key in data) {
      params.append(key, data[key]);
    }

    url += `?${params.toString()}`;
  }

  const res = await fetch(`${BASE_URL}/${url}`);

  try {
    return await res.clone().json();
  } catch {
    return await res.text();
  }
}

export async function post(url: string, data: any) {
  const params = new FormData();

  for (const key in data) {
    if (Array.isArray(data[key])) {
      params.append(key, JSON.stringify(data[key]));
    } else {
      params.append(key, data[key]);
    }
  }

  const res = await fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    body: params,
  });

  try {
    return await res.clone().json();
  } catch {
    return await res.text();
  }
}

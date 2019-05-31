exports.getLink = async (file) => { 
  const url = 'https://api.imgur.com/3/image';
  const data = new FormData();
  data.append('image', file);

  const getLink = await fetch(url, {
    body: data,
    headers: {
      "Authorization": "Client-ID " + '4409588f10776f7'
    },
    method: 'POST'
  })
  const link = await getLink.json()
  return link.data.link
}
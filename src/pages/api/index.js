import axios from "axios";

const opt = (head = { token: "" }) => ({
  headers: { "x-access-token": head.token },
});
// const opt_u = (head = { token: '' }) => ({
//   headers: { 'x-access-token': head.token, 'Content-Type': 'multipart/form-data' }
// })
const api_url = (uri = "") => `${config.api_url}${uri}`;

//----------------------------------------home
export const getHeadrNews = (data, head = {}) => {
  //   axios.get(
  //     api_url(
  //       data.address
  //     ),
  //     opt(head)
  //   );
  return (
    data &&
    head && [
      {
        id: 1,
        imageurl: `https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNDYzNjQ4fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`,
        title: "انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 1,
        date: new Date("2023-03-25"),
      },
      {
        id: 2,
        imageurl: `https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60`,
        title: "انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 2,
        date: new Date("2023-03-25"),
      },
      {
        id: 3,
        imageurl: `https://images.unsplash.com/photo-1511300276866-a284652b55c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60`,
        title: "انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 3,
        date: new Date("2023-03-25"),
      },
    ]
  );
};

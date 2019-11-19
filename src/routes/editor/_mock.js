const mock = {
  title: "SAMPLE",
  description: "sample rustic lp",
  navigation: {
    logo: "great-success.png",
    position: "fixed",
    links: [
      {
        name: "About",
        to: "/about"
      }
    ]
  },
  eyecatch: {
    url: "",
    params: {
    }
  },
  sections: [
    {
      type: "normal",
      wrap: "wrapped",
      align: "center",
      columns: 3,
      background_url: "",
      background_color: "rgba(0, 0, 0, .25)",
      components: [
        {
          url: "library/component.html",
          params: {
            heading: "sample"
          }
        }
      ]
    },
    {
      type: "normal",
      wrap: "wrapped",
      align: "center",
      columns: 3,
      background_url: "",
      background_color: "rgba(0, 0, 0, .25)",
      components: [
        {
          url: "library/component.html",
          params: {
            heading: "sample"
          }
        }
      ]
    }
  ]
};

export default mock;

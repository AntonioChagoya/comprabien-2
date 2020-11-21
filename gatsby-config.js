
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`pages`,
        path:`%{_dir}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`post`,
        path:`%{_dir}/src/post`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`%{_dir}/src/images`
      },
    },
  ],
}

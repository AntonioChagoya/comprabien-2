
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filsystem`,
      options:{
        name:`pages`,
        path:`%{_dir}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filsystem`,
      options:{
        name:`post`,
        path:`%{_dir}/src/post`
      },
    },
    {
      resolve: `gatsby-source-filsystem`,
      options:{
        name:`images`,
        path:`%{_dir}/src/images`
      },
    },
  ],
}

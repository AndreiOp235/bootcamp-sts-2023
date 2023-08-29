

<pre data-v-03c63cf6="" id="js">module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bootcamp-sts-2023/' // Numele repository-ului creat.
    : '/'
})</pre>
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['@vueuse/core', 'vue'],
      dts: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/example.ts',
      name: 'WorkspaceA',
      fileName: 'workspace-a',
    },
  },
})
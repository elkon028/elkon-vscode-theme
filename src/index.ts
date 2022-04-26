import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/elkon-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Elkon Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/elkon-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Elkon Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/elkon-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Elkon Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/elkon-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Elkon Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))

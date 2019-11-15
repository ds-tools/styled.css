<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/54139355" height="200px"/>
  <br><br>
  <b>Extract css from *.style.js files</b>
  <br><br>
  <img src="https://img.shields.io/badge/maturity-proof--of--concept-d85151?style=flat-square"/>

</p>

&nbsp;

#### install

```
yarn add @ds-tools/styled.css --dev
```

&nbsp;

#### usage

Add it to your `package.json`

```json
{
  "scripts": {
    "css": "styled.css --theme src/theme/theme.js"
  }
}
```

&nbsp;

input:

`*.styles.js` authored for a system-ui theme spec.

```js
/* form.styles.js */
export const styles = {
  Form: {
    margin: "auto",
    boxShadow: "shallow",
    paddingY: 4
  },
  FormLabel: {
    color: "grays.800",
    fontSize: 2,
    marginBottom: 1
  }
};
```

output:

```css
/* styles.css */

.form {
  margin: auto;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  padding-top: 32px;
  padding-bottom: 32px;
}
.form--label {
  color: #404b5a;
  font-size: 16px;
  margin-bottom: 4px;
}
```

See `/example` folder for full example

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)

/* 
/ @type scale: Major Third
*/
const base = 1;
const scale = 1.25;

const TypeScale = {
  header1: `${base * scale * 5}rem`,
  header2: `${base * scale * 4}rem`,
  header3: `${base * scale * 3}rem`,
  header4: `${base * scale * 2}rem`,
  header5: `${base * scale}rem`,
  paragraph: `${base}rem`,
  helper: `${base / scale}rem`,
  copyright: `${base / (scale * 2)}rem`,
};

export default TypeScale;

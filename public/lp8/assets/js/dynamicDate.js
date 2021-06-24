var _0x1f4d = [
  "add",
  "dddd\x20MMMM\x20D,\x20\x20YYYY",
  "getElementById",
  "locale",
  "innerHTML",
  "hours",
  "format",
  "currentYear",
  "date",
  "dddd\x20MMMM\x20D,\x20YYYY",
  "YYYY",
  "needDate",
];
(function (_0x34e46d, _0x4753b4) {
  var _0x1f4d86 = function (_0x4276bf) {
    while (--_0x4276bf) {
      _0x34e46d["push"](_0x34e46d["shift"]());
    }
  };
  _0x1f4d86(++_0x4753b4);
})(_0x1f4d, 0x18e);
var _0x4276 = function (_0x34e46d, _0x4753b4) {
  _0x34e46d = _0x34e46d - 0x148;
  var _0x1f4d86 = _0x1f4d[_0x34e46d];
  return _0x1f4d86;
};
var _0x13ee4d = _0x4276,
  m = moment(),
  today = m[_0x13ee4d(0x149)]("EN")["format"](_0x13ee4d(0x153)),
  customDate = m[_0x13ee4d(0x152)](-0x48, _0x13ee4d(0x14b)),
  requireDate = customDate[_0x13ee4d(0x14c)](_0x13ee4d(0x14f)),
  elementTodayDate = document[_0x13ee4d(0x148)](_0x13ee4d(0x14e)),
  elementNeedDate = document[_0x13ee4d(0x148)](_0x13ee4d(0x151)),
  elementYear = document[_0x13ee4d(0x148)](_0x13ee4d(0x14d));
elementNeedDate && (elementNeedDate["innerHTML"] = requireDate);
elementTodayDate && (elementTodayDate["innerHTML"] = today);
elementYear && (elementYear[_0x13ee4d(0x14a)] = m["format"](_0x13ee4d(0x150)));

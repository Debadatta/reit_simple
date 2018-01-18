import immutable from 'object-path-immutable';
import _ from 'lodash';

export function capitalize(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
}

export function titleize(string) {
  if (!string) return;
  let stringArray = string.split('_');

  stringArray = stringArray.map(str => {
    return capitalize(str);
  });

  return stringArray.join(' ');
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function commaSeparatedList(list, renderer, separator = ', ') {
  let values = list.map(renderer);
  values = values.filter(v => v);

  if (values.length > 1) {
    return values.reduce((prev, curr, i) => [prev, separator, curr]);
  }

  return values;
}

export function getQueryStrings() {
  var assoc = {};
  var decode = function(s) {
    return decodeURIComponent(s.replace(/\+/g, ' '));
  };
  var queryString = window.location.search.substring(1);
  var keyValues = queryString.split('&');

  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  }

  return assoc;
}

export function mailtoSupport(options = {}) {
  let userInfo = '';

  if (options.user) {
    let userName = encodeURIComponent(options.user.name);
    let userEmail = encodeURIComponent(options.user.email);
    userInfo = `[${options.user.id}] ${userName} <${userEmail}>`;
  }
  if (options.account) {
    let userName = encodeURIComponent(options.account.name);
    let userEmail = encodeURIComponent(options.account.email);
    userInfo = `[${userName} <${userEmail}>`;
  }

  let url = window.location.href;
  let body = `%0D%0A%0D%0A---%0D%0ASubmission information:  DO NOT DELETE%0D%0A${new Date()}%0D%0A---%0D%0A${userInfo}%0D%0A${url}%0D%0A---`;

  return mailto('support@clockworkrecruiting.com', options) + `body=${body}`;
}

export function mailto(to, options = {}) {
  let r = `mailto:${encodeURIComponent(to)}?`;
  if (options.cc) r += `cc=${encodeURIComponent(options.cc)}&`;
  if (options.bcc) r += `bcc=${encodeURIComponent(options.bcc)}&`;
  if (options.subject) r += `subject=${encodeURIComponent(options.subject)}&`;

  return r;
}

export function groupByName(ObjectsArray) {
  let groupedObjects = {};

  for (let obj of ObjectsArray) {
    var firstLetter = obj.name.charAt(0).toUpperCase();

    if (groupedObjects[firstLetter] === undefined) {
      groupedObjects[firstLetter] = [];
    }

    groupedObjects[firstLetter].push(obj);
  }

  // Sort Objects Alphabetically
  let keys = Object.keys(groupedObjects).sort(function keyOrder(k1, k2) {
    if (k1 < k2) return -1;
    else if (k1 > k2) return +1;
    else return 0;
  });

  let i,
    after = {};
  for (i = 0; i < keys.length; i++) {
    after[keys[i]] = groupedObjects[keys[i]];
    delete groupedObjects[keys[i]];
  }

  for (i = 0; i < keys.length; i++) {
    groupedObjects[keys[i]] = after[keys[i]];
  }

  return groupedObjects;
}

export function unCamelCase(str) {
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, str => str.toUpperCase())
  );
}

export function isEmail(str) {
  // eslint-disable-next-line
  const regex = /\S+@\S+\.\S+/;
  return regex.test(str);
}

export function updateStateIfChanged(state, data = {}) {
  const toUpdateKeys = Object.keys(data).filter(k => !_.isEqual(state[k], data[k]));

  if (toUpdateKeys.length > 0) {
    const imm = immutable(state);
    toUpdateKeys.forEach(k => imm.set(k, data[k]));
    return imm.value();
  }

  return state;
}

export function simpleFormat(str) {
  if(!str) return;

  str = str.replace(/\r\n?/, '\n').trim();
  if (str.length > 0) {
    str = str.replace(/\n\n+/g, '</p><p>');
    str = str.replace(/\n/g, '<br />');
  }
  return str;
}

export function stripTags(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

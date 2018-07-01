import { helper } from '@ember/component/helper';

function truncateText(params, hash) {
  const [ value ] = params;
  const { limit, stripHtml } = hash;
  let text = '';

  if (value != null && value.length > 0) {
    text = value.substr(0, limit);

    if (value.length > limit) {
      text += '...';
    }
  }

  if (stripHtml) {
    text = text.replace(/(<([^>]+)>)/ig,"");
    text = text.replace(/&nbsp;/g, ' ');
  }

  return text;
}

export default helper(truncateText);

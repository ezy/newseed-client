import { helper } from '@ember/component/helper';
import moment from 'moment';

export function dateFormat([date, format]) {
  return moment(date).format(format);
}

export default helper(dateFormat);

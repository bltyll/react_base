import { getTemplate } from '@/servers/test';
import dayjs from 'dayjs';

const User = () => {
  console.log(dayjs('2013-11-18 11:55').format());

  return (
    <div
      onClick={async () => {
        const a = await getTemplate(1);
      }}
    >
      User
    </div>
  );
};
export default User;

import { getActiveAddress } from "./wallet";
import { post, gql, get } from "./arweave";
import { stampCounts, stamp, stampCount } from "./stamps";
import { isVouched } from "./vouched";
import { register } from './warp';

export default {
  connect: getActiveAddress,
  gql,
  dispatch: post,
  get,
  //contractsByWallet,
  //readState,
  getActiveAddress,
  //deploy,
  post,
  stampCounts,
  stamp,
  stampCount,
  isVouched,
  register,
};
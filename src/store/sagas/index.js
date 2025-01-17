import { fork } from "redux-saga/effects";
import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import cartSaga from "./cart.saga";
import voucherSaga from "./voucher.saga";

export default function* rootSaga() {
    yield fork(authSaga);
    yield fork(productSaga);
    yield fork(cartSaga);
    yield fork(voucherSaga);
}

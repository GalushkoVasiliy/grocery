import {BASE_URI} from '../config/CONSTANT';
import {Product} from '../interfaces';

export const get_product_list = async () =>
  await fetch(`${BASE_URI}data/`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());

export const get_single_product = async (id: number) => {
  const res = await fetch(`${BASE_URI}basket/${id}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());

  if (res) {
    return res;
  }
  return false;
};

export const get_basket_list = async () =>
  await fetch(`${BASE_URI}basket/`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());

export const add_product_to_basket = async (data: Product) => {
  const res = await fetch(`${BASE_URI}basket/`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json());

  if (res) {
    return true;
  }
  return false;
};

export const delete_product_from_basket = async (id: number) => {
  const res = await fetch(`${BASE_URI}basket/${id}`, {
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());

  if (res) {
    return true;
  }
  return false;
};
export const update_product_for_basket = async ({
  id,
  product,
}: {
  id: number;
  product: Product;
}) => {
  const res = await fetch(`${BASE_URI}basket/${id}`, {
    method: 'patch',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then(r => r.json());

  if (res) {
    return true;
  }
  return false;
};

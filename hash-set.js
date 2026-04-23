import { HashMap } from './hash-map.js';

export class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(key) {
    this.map.set(key, true);
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    this.map.remove(key);
  }

  length() {
    return this.map.length();
  }

  clear() {
    this.map.clear();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.keys();
  }

  entries() {
    return this.map.keys().map(key => [key, key]);
  }
}
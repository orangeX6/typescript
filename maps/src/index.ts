/*
/// <reference types="@types/google.maps" />
 */
import { User } from './User';
// import { Example } from './Example';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
// const example = new Example();

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);

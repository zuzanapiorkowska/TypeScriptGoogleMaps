///<reference types="@types/google.maps"/>

import { User } from "./User";
import { Company } from "./Company"

const mapBox = document.getElementById("root") as HTMLElement;

new google.maps.Map(mapBox, {
    zoom: 1, 
    center: {
        lat: 0,
        lng: 0
    }
});
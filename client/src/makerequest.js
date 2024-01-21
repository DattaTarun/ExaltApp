import axios from "axios";

export const makerequest=axios.create({
    baseURL:"http://localhost:1337/api",
    headers:{
        Authorization:"bearer " + '92312a337935c9de15f1121653cc0afe345c5f68c82fecc075ffb3cf03f436f4dbf7021e9b01ca68e17025a8edc503f74eb73f06b290201cc2e2ecaf23909aa767e0324bbf40361709dc29e3d6365d3bff0235feee881c8fdc857c1ff3d64edc98f0119c386b9875db14a6051813ab6ee4fa68be82c55cac3b81cf12e1e25870',
    }
})
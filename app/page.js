'use client'
import { useEffect, useState } from "react";
import { database, ref, onValue } from "../utils/FirebaseConn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow, faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const tempRef = ref(database, '/Temperature');
    const humRef = ref(database, '/Humidity');

    onValue(tempRef, (snapshot) => {
      const data = snapshot.val();
      console.log(`Temperature: ${data}`);
      setTemperature(data);
    }, (error) => {
      console.log(error);
    });

    onValue(humRef, (snapshot) => {
      const data = snapshot.val();
      console.log(`Humidity: ${data}`);
      setHumidity(data);
    }, (error) => {
      console.log(error);
    });
    console.log(`Humidity:`);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-8 min-h-screen py-2 w-[80%] md:w-auto m-auto">
        <h3 className="text-6xl">Hygrothermal Aging Chamber </h3>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Sensor Data</h1>
          <div className=" shadow-md rounded-lg p-6 flex flex-col items-start justify-between gap-8 px-5 py-5 border border-white">
            <div className="flex flex-row items-start justify-start gap-3">
              <FontAwesomeIcon size="2xl" icon={faTemperatureLow} />
              <p className="text-lg md:text-2xl">Temperature: {temperature !== null ? `${temperature} °C` : "Loading..."}</p>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <FontAwesomeIcon size="2xl" icon={faDroplet} />
              <p className="text-lg md:text-2xl">Humidity: {humidity !== null ? `${humidity} %` : "Loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

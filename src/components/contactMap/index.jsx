import GoogleMapReact from 'google-map-react'
import React from "react"
import { FaMapMarker } from 'react-icons/fa'
import styles from "./styles.module.scss"

export const ContactMap = () => {
    return (
        <div className={styles.container}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB5Y9oJpzku1xZLsJmEO51NfFkKGqr14As' }}
                defaultCenter={{
                    lat: 50.254210,
                    lng: 19.061890
                  }}
                defaultZoom={11}
            >
                <FaMapMarker lat="50.254210" lng="19.061890" size="4em" color="#970052" />
            </GoogleMapReact>
        </div>
    )
}
import React from 'react'

export default function VectorCheck({ width, height, color }) {
  return (
    <svg
      width={width || '68'}
      height={height || '69'}
      viewBox="0 0 68 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.1033 48.2018C28.2783 49.3941 30.2017 49.3941 31.3767 48.2018L51.1347 28.1533C52.2857 26.9854 52.2857 25.1096 51.1347 23.9417L50.5867 23.3857C49.4117 22.1934 47.4883 22.1934 46.3133 23.3857L31.3767 38.5418C30.2017 39.7341 28.2783 39.7341 27.1033 38.5418L21.6867 33.0457C20.5117 31.8534 18.5883 31.8534 17.4133 33.0457L16.8653 33.6017C15.7143 34.7696 15.7143 36.6454 16.8653 37.8133L27.1033 48.2018ZM34 69C29.2967 69 24.8767 68.0944 20.74 66.2831C16.6033 64.4719 13.005 62.0137 9.945 58.9087C6.885 55.8037 4.4625 52.1525 2.6775 47.955C0.8925 43.7575 0 39.2725 0 34.5C0 29.7275 0.8925 25.2425 2.6775 21.045C4.4625 16.8475 6.885 13.1962 9.945 10.0913C13.005 6.98625 16.6033 4.52812 20.74 2.71688C24.8767 0.905625 29.2967 0 34 0C38.7033 0 43.1233 0.905625 47.26 2.71688C51.3967 4.52812 54.995 6.98625 58.055 10.0913C61.115 13.1962 63.5375 16.8475 65.3225 21.045C67.1075 25.2425 68 29.7275 68 34.5C68 39.2725 67.1075 43.7575 65.3225 47.955C63.5375 52.1525 61.115 55.8037 58.055 58.9087C54.995 62.0137 51.3967 64.4719 47.26 66.2831C43.1233 68.0944 38.7033 69 34 69ZM34 62.1C41.5933 62.1 48.025 59.4263 53.295 54.0788C58.565 48.7313 61.2 42.205 61.2 34.5C61.2 26.795 58.565 20.2687 53.295 14.9213C48.025 9.57375 41.5933 6.9 34 6.9C26.4067 6.9 19.975 9.57375 14.705 14.9213C9.435 20.2687 6.8 26.795 6.8 34.5C6.8 42.205 9.435 48.7313 14.705 54.0788C19.975 59.4263 26.4067 62.1 34 62.1Z"
        fill={color || '#213E6E'}
        fillOpacity="0.78"
      />
    </svg>
  )
}
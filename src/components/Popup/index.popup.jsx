import './style.popup.scss';

export const popUP = (locationData) => {
    
    const name = locationData.name;
    const tempF = Math.round(locationData.main.temp * (9/5) - 459.67);
    const tempC = Math.round(locationData.main.temp - 273.15);
    
    const popup = `
        <div className='popup-container'>
            <div>
                <span className='popup-name'><u>${name}</u></span>
            </div>
            <div className='temp temp-f'>
                <span>Fahrenheit: ${tempF}</span>
            </div>
            <div className='temp temp-c'>
                <span>Celcius: ${tempC}</span>
            </div>
        </div>
    `;
      return popup;  
    
};
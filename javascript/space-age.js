/*
Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able
to say that they're 31.69 Earth-years old.

If you're wondering why Pluto didn't make the cut, go watch this youtube video.

Setup
Go through the setup instructions for Javascript to install the necessary
dependencies:
*/

const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const earthYearInSecs = 31557600;

function round(years, decimals) {
  const tenPowOfDecimals = Math.pow(10, decimals);
  return Math.round(years * tenPowOfDecimals) / tenPowOfDecimals;
}

export const age = (planet, seconds) => {
  const earthYears = seconds / earthYearInSecs;
  const planetYears = earthYears / orbitalPeriods[planet];
  return round(planetYears, 2);
};

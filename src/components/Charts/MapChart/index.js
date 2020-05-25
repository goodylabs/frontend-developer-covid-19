import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';

import CustomTooltip from './CustomTooltip';
import messages from './messages';
import { Colors, Url } from '../../../constants';

const MapChart = ({ setTooltipContent, countriesData }) => (
  <>
    <ComposableMap height={420} data-tip="" projectionConfig={{ scale: 150 }}>
      <Geographies geography={Url.geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, ISO_A2 } = geo.properties;
                const result = countriesData.filter((country) => country.CountryCode === ISO_A2);
                if (!result.length) {
                  setTooltipContent(<CustomTooltip header={NAME} />);
                } else {
                  setTooltipContent(
                    <CustomTooltip
                      header={NAME}
                      data={{
                        totalConfirmed: result[0].TotalConfirmed,
                        totalDeaths: result[0].TotalDeaths,
                        totalRecovered: result[0].TotalRecovered,
                      }}
                    />,
                  );
                }
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: Colors.default,
                  outline: 'none',
                },
                hover: {
                  fill: Colors.hover,
                  outline: 'none',
                },
                pressed: {
                  fill: Colors.pressed,
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </>
);

MapChart.propTypes = {
  setTooltipContent: PropTypes.func,
  countriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MapChart.defaultProps = {
  setTooltipContent: () => messages.noData,
};

export default memo(MapChart);

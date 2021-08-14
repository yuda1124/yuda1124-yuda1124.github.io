import React from 'react';
import '@fontsource/noto-sans-kr';
import '@fontsource/abril-fatface';
import '@fontsource/noto-serif-kr';

import './src/styles/_colors.scss';
import './src/styles/_global.scss';
import './src/styles/_prism.scss';
import './src/styles/_post.scss';
import './noflash';

import { PrimaryColorContextProvider } from './src/context';

export const wrapRootElement = ({ element }) => <PrimaryColorContextProvider>{element}</PrimaryColorContextProvider>;

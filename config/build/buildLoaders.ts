import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const svgrLoader = {
    test: /\.svg$/i,

    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,

    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [assetLoader, svgrLoader, scssLoader, tsLoader];
}

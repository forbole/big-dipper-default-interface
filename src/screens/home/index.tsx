import React from 'react';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useHomeHook } from './hooks';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
  return (
    <Layout
      searchBar={{
        searchBarPlaceholder: t('common:searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh magna, viverra sit
        amet ornare non, accumsan sit amet turpis. Maecenas at dui interdum, suscipit sem vel, ullamcorper ex. Vestibulum tristique ultrices mollis. Integer porttitor fringilla nibh sit amet aliquam. Donec sed sem arcu. Sed sed quam a erat feugiat convallis quis nec mi. Quisque laoreet rutrum velit, eu laoreet nisl efficitur eget. Nam sit amet ipsum facilisis, auctor sapien id, sollicitudin lorem. Nulla cursus lectus at scelerisque ultrices. Aliquam quis orci id dui tincidunt molestie eu ac nunc. Suspendisse ut convallis erat, ac rutrum nisl. Nunc non luctus ligula, at consequat odio. Fusce vehicula, turpis sit amet volutpat gravida, sem erat lacinia neque, sit amet ullamcorper tortor velit quis justo. Suspendisse ut magna blandit, molestie velit et, egestas risus. Quisque tempor, eros a ornare ornare, orci justo venenatis orci, id fringilla ex turpis vel ante. Duis tristique feugiat elementum. Praesent neque risus, efficitur a rutrum a, sodales non velit. Sed posuere auctor neque eu bibendum. Vestibulum dapibus molestie sem non semper. Nulla mauris erat, porttitor ut risus sit amet, interdum dignissim nulla. Morbi sit amet aliquam ligula. Cras a arcu accumsan, porta sapien at, porttitor massa.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate, sapien at rutrum porta, dui ante tempor sapien, sit amet malesuada ante orci ac nisl. Vestibulum sit amet maximus mauris, nec interdum eros. Morbi pharetra ex non diam accumsan, sed maximus mauris vestibulum. Donec vehicula semper accumsan. Morbi pulvinar finibus metus, ut cursus sem porta id. In convallis placerat gravida. Donec fermentum a mauris eget posuere.

        Integer scelerisque venenatis nisl, ac imperdiet velit tempus at. Morbi sagittis sapien non elit pretium convallis. Cras et laoreet nulla. Quisque consectetur finibus aliquam. Maecenas consequat magna ipsum, a hendrerit arcu rhoncus in. Morbi condimentum vitae diam non dictum. Nam egestas erat eget euismod dapibus. Vivamus vulputate, justo eget aliquet efficitur, ipsum augue cursus ante, a porttitor ex enim id elit. Fusce non quam a felis pulvinar varius quis ut nisl. Curabitur sed leo volutpat, ultricies ante nec, tristique nisl. Ut non massa feugiat, fermentum felis eu, porttitor enim. Donec quis tellus nec augue scelerisque vestibulum. Donec a nunc vehicula, semper risus id, auctor erat. Sed sagittis accumsan odio, sed maximus turpis convallis eu. Quisque pharetra ornare metus, ac euismod mi volutpat eu. Integer vitae convallis orci.

        Cras sed justo et nisl sodales condimentum ac sed neque. Phasellus tristique, ligula eget sollicitudin feugiat, diam ipsum ultricies velit, eget faucibus dolor ante vitae mi. Pellentesque neque libero, maximus vel fringilla ac, vehicula et ex. Integer ut cursus nisl. Vestibulum gravida velit at libero volutpat tristique. Sed maximus nisi elementum vestibulum mattis. Ut iaculis nec quam a tincidunt. Vestibulum ullamcorper pulvinar neque, ut aliquam mi porta at. D
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate, sapien at rutrum porta, dui ante tempor sapien, sit amet malesuada ante orci ac nisl. Vestibulum sit amet maximus mauris, nec interdum eros. Morbi pharetra ex non diam accumsan, sed maximus mauris vestibulum. Donec vehicula semper accumsan. Morbi pulvinar finibus metus, ut cursus sem porta id. In convallis placerat gravida. Donec fermentum a mauris eget posuere.

        Integer scelerisque venenatis nisl, ac imperdiet velit tempus at. Morbi sagittis sapien non elit pretium convallis. Cras et laoreet nulla. Quisque consectetur finibus aliquam. Maecenas consequat magna ipsum, a hendrerit arcu rhoncus in. Morbi condimentum vitae diam non dictum. Nam egestas erat eget euismod dapibus. Vivamus vulputate, justo eget aliquet efficitur, ipsum augue cursus ante, a porttitor ex enim id elit. Fusce non quam a felis pulvinar varius quis ut nisl. Curabitur sed leo volutpat, ultricies ante nec, tristique nisl. Ut non massa feugiat, fermentum felis eu, porttitor enim. Donec quis tellus nec augue scelerisque vestibulum. Donec a nunc vehicula, semper risus id, auctor erat. Sed sagittis accumsan odio, sed maximus turpis convallis eu. Quisque pharetra ornare metus, ac euismod mi volutpat eu. Integer vitae convallis orci.

        Cras sed justo et nisl sodales condimentum ac sed neque. Phasellus tristique, ligula eget sollicitudin feugiat, diam ipsum ultricies velit, eget faucibus dolor ante vitae mi. Pellentesque neque libero, maximus vel fringilla ac, vehicula et ex. Integer ut cursus nisl. Vestibulum gravida velit at libero volutpat tristique. Sed maximus nisi elementum vestibulum mattis. Ut iaculis nec quam a tincidunt. Vestibulum ullamcorper pulvinar neque, ut aliquam mi porta at. D
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate, sapien at rutrum porta, dui ante tempor sapien, sit amet malesuada ante orci ac nisl. Vestibulum sit amet maximus mauris, nec interdum eros. Morbi pharetra ex non diam accumsan, sed maximus mauris vestibulum. Donec vehicula semper accumsan. Morbi pulvinar finibus metus, ut cursus sem porta id. In convallis placerat gravida. Donec fermentum a mauris eget posuere.

        Integer scelerisque venenatis nisl, ac imperdiet velit tempus at. Morbi sagittis sapien non elit pretium convallis. Cras et laoreet nulla. Quisque consectetur finibus aliquam. Maecenas consequat magna ipsum, a hendrerit arcu rhoncus in. Morbi condimentum vitae diam non dictum. Nam egestas erat eget euismod dapibus. Vivamus vulputate, justo eget aliquet efficitur, ipsum augue cursus ante, a porttitor ex enim id elit. Fusce non quam a felis pulvinar varius quis ut nisl. Curabitur sed leo volutpat, ultricies ante nec, tristique nisl. Ut non massa feugiat, fermentum felis eu, porttitor enim. Donec quis tellus nec augue scelerisque vestibulum. Donec a nunc vehicula, semper risus id, auctor erat. Sed sagittis accumsan odio, sed maximus turpis convallis eu. Quisque pharetra ornare metus, ac euismod mi volutpat eu. Integer vitae convallis orci.

        Cras sed justo et nisl sodales condimentum ac sed neque. Phasellus tristique, ligula eget sollicitudin feugiat, diam ipsum ultricies velit, eget faucibus dolor ante vitae mi. Pellentesque neque libero, maximus vel fringilla ac, vehicula et ex. Integer ut cursus nisl. Vestibulum gravida velit at libero volutpat tristique. Sed maximus nisi elementum vestibulum mattis. Ut iaculis nec quam a tincidunt. Vestibulum ullamcorper pulvinar neque, ut aliquam mi porta at. D
      </p>
    </Layout>
  );
};

export default Home;

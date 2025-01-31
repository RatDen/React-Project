import styles from './styles.module.css';
import { ActionLink, SideSourceView } from '@/shared/ui';
import { SideSources, Socials } from '../lists';

export const More = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__block}>
        {SideSources.map(({ link, image, alt, title, text }, index) => (
          <li key={index}>
            <ActionLink href={link}>
              <SideSourceView img={image} alt={alt} title={title} text={text} />
            </ActionLink>
          </li>
        ))}
      </ul>

      <ul className={styles.container__block}>
        {Socials.map(({ link, image, alt }, index) => (
          <li key={index}>
            <ActionLink href={link} round>
              <img src={image} alt={alt} className={styles.socials__image} />
            </ActionLink>
          </li>
        ))}
      </ul>

      <p className={styles.copyright}>
        {
          '© 2025 ООО «Иви.ру» \n HBO ® and related service marks are the property of Home Box Office, Inc'
        }
      </p>
    </div>
  );
};

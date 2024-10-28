import styles from '../styles/modules/themeSwitch.module.css';
import useTheme from '../hooks/useTheme';

const ThemeSwitch = () => {
  const {theme, setTheme} = useTheme();
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={styles.themeSettingsWrapper}>
        <span className={styles.themeText}>Dark Mode</span>
        <label 
          className={styles.toggleContainer}>
          <input 
              type="checkbox" 
              className={styles.checkbox}
              onChange={changeTheme}
              checked={theme === 'dark'}
              />
          <span className={styles.toggleSlider}></span>
        </label>
    </div>
  )
}

export default ThemeSwitch
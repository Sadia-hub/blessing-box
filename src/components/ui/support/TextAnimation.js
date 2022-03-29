import Typewriter from "typewriter-effect";
import Color from "../../../../styles/colors";
import styles from '../../../../styles/TextAnimation.module.css';
 export const TextAnimation = () => {
    return (
      <>
        <div className={styles.text} style={{ color: Color.white}}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
              //  "Indvidually we are a  drop, but together we are an ocean",     
              // "Your little donation may occupy their biggest hearts ",
              "Your little donation can be the reason behind the someone's Happiness ",
              ],
            }}
            
          />
        </div>
      </>
    );
  };
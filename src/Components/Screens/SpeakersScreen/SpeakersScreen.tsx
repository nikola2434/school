import { FC } from "react";
import style from "./SpeakersScreen.module.scss";
import Alt from "@public/Speakers/alt.svg";
import Axiom from "@public/Speakers/axiom_jdk.svg";
import Basis from "@public/Speakers/basis.svg";
import Fstek from "@public/Speakers/fstek.svg";
import Isprun from "@public/Speakers/isp_run.svg";
import Kaspersky from "@public/Speakers/kaspersky.svg";
import Luntry from "@public/Speakers/luntry.svg";
import Postgres from "@public/Speakers/postgres.svg";
import Profiscope from "@public/Speakers/profiscope.svg";
import Redsoft from "@public/Speakers/redsoft.svg";
import Yadro from "@public/Speakers/yadro.svg";
import VeMake from "@public/Speakers/weMake.svg";

export const SpeakersScreen: FC = () => {
  return (
    <section id="speakers" className={style.screen}>
      <h1>Спикеры</h1>
      <div className={style.row}>
        <a href="https://www.ispras.ru/" target="_blank" className={style.link}>
          <Isprun />
        </a>
        <a
          href="https://axiomjdk.ru/pages/axiom-jdk/"
          target="_blank"
          className={style.link}
        >
          <Axiom />
        </a>
        <a href="https://yadro.com/" target="_blank" className={style.link}>
          <Yadro />
        </a>
        <a href="https://basistech.ru/" target="_blank" className={style.link}>
          <Basis />
        </a>
        <a
          href="https://www.red-soft.ru/ru/"
          target="_blank"
          className={style.link}
        >
          <Redsoft />
        </a>
        <a
          href="https://wemake.services/"
          target="_blank"
          className={style.link}
        >
          <VeMake />
        </a>
        <a href="https://luntry.ru/" target="_blank" className={style.link}>
          <Luntry />
        </a>
        <a href="https://profiscope.io/" target="_blank" className={style.link}>
          <Profiscope />
        </a>
        <a
          href="https://postgrespro.ru/"
          target="_blank"
          className={style.link}
        >
          <Postgres />
        </a>
        <a
          href="https://www.kaspersky.ru/"
          target="_blank"
          className={style.link}
        >
          <Kaspersky />
        </a>
        <a
          href="https://www.basealt.ru/"
          target="_blank"
          className={style.link}
        >
          <Alt />
        </a>
        <a href="https://fstec.ru/" target="_blank" className={style.link}>
          <Fstek />
        </a>
      </div>
    </section>
  );
};

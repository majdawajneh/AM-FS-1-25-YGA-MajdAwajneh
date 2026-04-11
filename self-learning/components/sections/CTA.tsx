'use client';
import Link from 'next/link';
import style from "./css/CTA.module.css";

export default function CTA() {
  return (
    <section className={style.cta}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.badge}>Limited Cohort</div>
          <h2 className={style.title}>Next Professional Cohort Starts in</h2>
          <div className={style.countdown}>
            <div className={style.countItem}>
              <span className={style.countNum}>14</span>
              <span>Days</span>
            </div>
            <div className={style.countItem}>
              <span className={style.countNum}>08</span>
              <span>Hours</span>
            </div>
            <div className={style.countItem}>
              <span className={style.countNum}>32</span>
              <span>Minutes</span>
            </div>
          </div>
          <p className={style.subtitle}>
            Join 250 exceptional engineers already enrolled. Only 50 spots remaining.
          </p>
          <div className={style.buttons}>
            <Link href="/apply" className={style.btnPrimary}>
              Reserve Your Spot →
            </Link>
            <Link href="#courses" className={style.btnSecondary}>
              View Curriculum
            </Link>
          </div>
        </div>
        <div className={style.featuresList}>
          <div className={style.feature}>
            <div className={style.icon}>✅</div>
            <span>$25K Cloud Credits Included</span>
          </div>
          <div className={style.feature}>
            <div className={style.icon}>✅</div>
            <span>1:1 Mentorship with EMs</span>
          </div>
          <div className={style.feature}>
            <div className={style.icon}>✅</div>
            <span>Guaranteed Job Referrals</span>
          </div>
          <div className={style.feature}>
            <div className={style.icon}>✅</div>
            <span>Staff-Level Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

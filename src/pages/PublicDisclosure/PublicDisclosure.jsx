import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from "./PublicDisclosure.module.css"

const PublicDisclosure = () => {
  return (
    <>
        <Navbar/>
        <Header title="Public Disclosure"/>
        <div className={styles.publicdisclosure}>
            <h2>Mandatory Public Disclosure</h2>
            <div className={styles.publicdisclosure_generalinfo}>
                <h3>A. General Info</h3>
                <div className={styles.publicdisclosure_generalinfo_table}>
                <table class="my_table">
                    <thead>
                        <tr>
                            <th>SL. No</th>
                            <th>INFORMATION</th>
                            <th class="has-text-align-left" data-align="left">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>NAME OF THE SCHOOL</td>
                        <td class="has-text-align-left" data-align="left">THE GREEN SCHOOL INTERNATIONAL, GUWAHATI</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>AFFILIATION NO.(IF APPLICABLE)</td>
                        <td class="has-text-align-left" data-align="left">230317</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>SCHOOL CODE (IF APPLICABLE)</td>
                        <td class="has-text-align-left" data-align="left">35575</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>COMPLETE ADDRESS WITH PIN CODE</td>
                        <td class="has-text-align-left" data-align="left">MAHAPURUSH MADHABDEV PATH, NEAR ITI, NALAPARA, SARUSAJAI,<br/>GUWAHATI 781040, 31, ASSAM – 781040</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>PRINCIPAL NAME</td>
                        <td class="has-text-align-left" data-align="left">Mrs. MOUSUMI GANGULY</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>PRINCIPAL QUALIFICATION</td>
                        <td class="has-text-align-left" data-align="left">MA (Sociology and Economics) B.Ed</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>SCHOOL EMAIL ID</td>
                        <td class="has-text-align-left" data-align="left">vedicgyanfoundation@gmail.com</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                        <td class="has-text-align-left" data-align="left">9856199105</td>
                        </tr>
                    </tbody>
                    </table>

                </div>
            </div>

            <div className={styles.publicdisclosure_documents}>
            <h3>B. DOCUMENTS AND INFORMATION:</h3>
                <div className={styles.publicdisclosure_documents_table}>
                <table class="my_table">
<thead>
<tr>
<th>SL No.</th>
<th>DOCUMENTS/INFORMATION</th>
<th>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL’S WEBSITE</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION<br/>OF AFFILIATION, IF ANY</td>
<td><a href="src/assets/documents/UPGRADATION LETTER.pdf" target='_blank'>Click here to download</a></td>
</tr>
{/* <tr>
<td>2</td>
<td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL<br/>CERTIFICATE, AS APPLICABLE</td>
<td><a href="http://shemfordguwahati.co.in/wp-content/uploads/2022/05/Vedic-Gyan-Foundation-Trust-deed.pdf">http://shemfordguwahati.co.in/wp-content/uploads/2022/05/Vedic-Gyan-Foundation-Trust-deed.pdf</a></td>
</tr> */}
<tr>
<td>3</td>
<td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY<br/>THE STATE GOVT./UT</td>
<td><a href="src/assets/documents/copy of Noc.pdf">Click here to download</a></td>
</tr>
<tr>
<td>4</td>
<td>COPIES OF THE RECOGNITION CERTIFICATE UNDER THE RTE ACT, 2009, AND IT’S<br/>RENEWAL IF APPLICABLE</td>
<td><a href="src/assets/documents/recognition certificate.pdf" target='_blank'>Click here to download</a></td>
</tr>
<tr>
<td>5</td>
<td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL<br/>BUILDING CODE</td>
<td><a href="src/assets/documents/building safety certificate.pdf" target='_blank'>Click here to download</a></td>
</tr>
{/* <tr>
<td>6</td>
<td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT<br/>AUTHORITY</td>
<td><a href="http://shemfordguwahati.co.in/wp-content/uploads/2023/06/Fire-NOC-2023.pdf">http://shemfordguwahati.co.in/wp-content/uploads/2023/06/Fire-NOC-2023.pdf</a></td>
</tr> */}
{/* <tr>
<td>7</td>
<td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR<br/>AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF<br/>CERTIFICATION BY SCHOOL</td>
<td><a href="https://shemfordguwahati.co.in/wp-content/uploads/2022/05/Self-Certification-22-23.pdf">https://shemfordguwahati.co.in/wp-content/uploads/2022/05/Self-Certification-22-23.pdf</a></td>
</tr> */}
<tr>
<td>8</td>
<td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
<td><a href="src/assets/documents/health and hygene.pdf">Click here to download</a></td>
</tr>
<tr>
<td>9</td>
<td>LAND CERTIFICATE</td>
<td><a href="src/assets/documents/land certificate.pdf">Click here to download</a></td>
</tr>
{/* <tr>
<td>10</td>
<td>COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION</td>
<td><a href="http://shemfordguwahati.co.in/wp-content/uploads/2023/05/Self-Certification-22-23.pdf">http://shemfordguwahati.co.in/wp-content/uploads/2023/05/Self-Certification-22-23.pdf</a></td>
</tr> */}
</tbody>
</table>
{/* <table style={{marginBlock:"2rem"}}><tbody><tr><td>APPENDIX -IX<br/>MANDATORY PUBLIC DISCLOSURE</td><td><a href="http://shemfordguwahati.co.in/wp-content/uploads/2023/06/Mandatory-Disclosure.pdf" class="rank-math-link">http://shemfordguwahati.co.in/wp-content/uploads/2023/06/Mandatory-Disclosure.pdf</a></td></tr></tbody></table> */}
    <div style={{marginBlock:"1rem"}}>
        <p><b>NOTE:</b> THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED DOCUMETNS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN
CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.</p>
    </div>
                </div>

            </div>

        <div className={styles.publicdisclosure_results}>
            <h3>C. RESULT AND ACADEMICS :</h3>
                <div className={styles.publicdisclosure_results_table}>
                <table class="my_table">
<thead>
<tr>
<th>SL No.</th>
<th>DOCUMENTS/INFORMATION</th>
<th>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL’S WEBSITE</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>FEE STRUCTURE OF THE SCHOOL</td>
<td><a href="src\assets\documents\FEE STRUCTURE 2023-2024.pdf">Click here to donwload</a></td>
</tr>
<tr>
<td>2</td>
<td>ANNUAL ACADEMIC CALANDER</td>
<td><a href="src\assets\documents\ACADEMIC PLANNER 2023-24.pdf">Click here to download</a></td>
</tr>
<tr>
<td>3</td>
<td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
<td><a href="src\assets\documents\SCHOOL MANAGING COMMITTEE.pdf">Click here to download</a></td>
</tr>
<tr>
<td>4</td>
<td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
<td><a href="src\assets\documents\PARENTS TEACHERS ASSOCIATION MEMBER LIST.pdf">Click here to download</a></td>
</tr>
<tr>
<td>5</td>
<td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER<br/>APPLICABLILITY</td>
<td><a href="src\assets\documents\LAST THREE YEARS BOARD DATA.pdf">Click here to download</a></td>
</tr>
</tbody>
</table>

                </div>
        </div>

        <div className={styles.publicdisclosure_staff}>
            <h3>D. STAFF (Teaching) :</h3>
                <div className={styles.publicdisclosure_staff_table}>
                <table class="my_table">
        <thead>
            <tr>
                <th>SL No.</th>
                <th>INFORMATION</th>
                <th>DETAILS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>PRINCIPAL</td>
                <td>Mousumi Ganguly</td>
            </tr>
            <tr>
                <td rowspan="4">2</td>
                <td>TOTAL NO. OF TEACHERS</td>
                <td>53</td>
            </tr>
            <tr>
                <td>PGT</td>
                <td>11</td>
            </tr>
            <tr>
                <td>TGT</td>
                <td>17</td>
            </tr>
            <tr>
                <td>PRT</td>
                <td>25</td>
            </tr>
            <tr>
                <td>3</td>
                <td>TEACHERS SECTION RATIO</td>
                <td>1.25</td>
            </tr>
            <tr>
                <td>4</td>
                <td>DETAILS OF SPECIAL EDUCATOR</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

                </div>
        </div>

        <div className={styles.publicdisclosure_classx}>
            <h3>E. RESULT CLASS: X</h3>
                <div className={styles.publicdisclosure_classx_table}>
                <table class="my_table">
<thead>
<tr>
<th>SL<br/>No.</th>
<th>YEAR</th>
<th>NO. OF REGISTERED<br/>STUDENTS</th>
<th>NO. OF STUDETNS<br/>PASSED</th>
<th>PASS PERCENTAGE</th>
<th>REMARKS</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2023</td>
<td>15</td>
<td>15</td>
<td>100</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

                </div>
        </div>

        <div className={styles.publicdisclosure_classxii}>
            <h3>F. RESULT CLASS: XII</h3>
                <div className={styles.publicdisclosure_classx_table}>
                <table class="my_table">
<thead>
<tr>
<th>SL<br/>No.</th>
<th>YEAR</th>
<th>NO. OF REGISTERED<br/>STUDENTS</th>
<th>NO. OF STUDETNS<br/>PASSED</th>
<th>PASS PERCENTAGE</th>
<th>REMARKS</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2023</td>
<td></td>
<td></td>
<td></td>
<td>Not announced yet</td>
</tr>
</tbody>
</table>

                </div>
        </div>

        <div className={styles.publicdisclosure_infrastructure}>
            <h3>G. SCHOOL INFRASTRUCTURE:</h3>
                <div className={styles.publicdisclosure_publicdisclosure_infrastructure_table}>
                <table class="my_table">
<thead>
<tr>
<th>SL No.</th>
<th>INFORMATION</th>
<th>DETAILS</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
<td>12096</td>
</tr>
<tr>
<td>2</td>
<td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)</td>
<td>52 &amp; 50</td>
</tr>
<tr>
<td>3</td>
<td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
<td>7 &amp; 79</td>
</tr>
<tr>
<td>4</td>
<td>INTERNET FACILITY</td>
<td>YES</td>
</tr>
<tr>
<td>5</td>
<td>NO. OF GIRLS TOILETS</td>
<td>18</td>
</tr>
<tr>
<td>6</td>
<td>NO. OF BOYS TOILETS</td>
<td>20</td>
</tr>

</tbody>
</table>

                </div>
        </div>

        </div>
        <div>
      
        </div>
        <Footer/>
    </>
  )
}

export default PublicDisclosure
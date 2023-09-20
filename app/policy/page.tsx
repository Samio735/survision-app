export default function page() {
  return (
    <div className="p-4 flex flex-col gap-4 py-8">
      {" "}
      <div>
        <h2>Privacy Policy</h2>
        <p>
          Data Collection: Clearly state what data will be collected from
          respondents. Mention that responses will be anonymized and aggregated
          to protect individual privacy.
        </p>
        {/* Add other privacy policy content */}
      </div>
      <div>
        <h2>User Guidelines</h2>
        <p>
          Ethical Behavior: Instruct survey response collectors to act
          ethically, ensuring they do not manipulate or coerce respondents in
          any way.
        </p>
        {/* Add other user guidelines content */}
      </div>
      <div>
        <h2>Security Measures</h2>
        <p>
          Secure Access: Limit access to the survey app and data to authorized
          personnel only.
        </p>
        {/* Add other security measures content */}
      </div>
      <div>
        <h2>Compliance</h2>
        <p>
          Legal Compliance: Ensure that the survey app and data collection
          process comply with relevant data protection and privacy laws, such as
          GDPR, HIPAA, or CCPA.
        </p>
        {/* Add other compliance content */}
      </div>
      <div>
        <h2>Data Transparency</h2>
        <p>
          Reporting: Provide a process for reporting any issues, bugs, or
          incidents related to the survey app or data collection process.
        </p>
        {/* Add other data transparency content */}
      </div>
    </div>
  );
}

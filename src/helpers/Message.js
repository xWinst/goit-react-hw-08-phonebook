import { Report } from 'notiflix/build/notiflix-report-aio';

const styles = {
    width: '350px',
    svgSize: '100px',
    titleFontSize: '20px',
    buttonFontSize: '20px',
    borderRadius: '10px',
};

class Message {
    warning(warning, text, buttonText) {
        return Report.warning(warning, text, buttonText, styles);
    }

    error(error, text, buttonText) {
        return Report.failure(error, text, buttonText, styles);
    }
}

export default new Message();

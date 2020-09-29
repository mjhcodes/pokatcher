import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, Input, Modal, Backdrop, Fade } from "@material-ui/core";
import { useStyles } from "../assets/styles";
import { isObjEmpty, getArticle } from "../utils/util";
import Button from "./Button";

const NameModal = ({
  isModalOpen,
  handleModalClose,
  my_collection,
  caughtPokemon,
}) => {
  const [name, setName] = useState("");
  const { modal, paper, form, input } = useStyles();

  const types =
    !isObjEmpty(caughtPokemon) &&
    caughtPokemon.types.map((type) => type.type.name);

  const confirmCatch = () => {
    const obj = { ...caughtPokemon, name };
    localStorage.setItem("featured_pokemon", JSON.stringify(obj));
    localStorage.setItem(
      "my_collection",
      JSON.stringify([...my_collection, obj])
    );
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-subtitle"
      className={modal}
      open={isModalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={paper}>
          <h2 id="modal-title" className="modal__title">
            AWESOME!
          </h2>
          <p id="modal-subtitle" className="modal__subtitle">
            {!isObjEmpty(caughtPokemon) &&
              `You caught ${getArticle(types[0])} ${types.join(" / ")}!`}
          </p>
          <FormControl className={form} noValidate autoComplete="off">
            <label htmlFor="new-name" className="modal__label">
              Now let's give it a name!
            </label>

            <Input
              required
              id="new-name"
              className={input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button
              to={`/pokemon/${caughtPokemon.id}`}
              label="SUBMIT"
              disabled={!name}
              onClick={() => confirmCatch()}
            />
          </FormControl>
        </div>
      </Fade>
    </Modal>
  );
};

NameModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  my_collection: PropTypes.array.isRequired,
  caughtPokemon: PropTypes.object.isRequired,
};

export default NameModal;
